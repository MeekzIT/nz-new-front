import styles from "./Schema.module.css";
import CirculeButtonNumber from "@/components/ui/CirculeButtonNumber/CirculeButtonNumber";
import { foolNumbers } from "./constants";
import Link from "next/link";
import TooltipPolygon from "@/components/ui/TooltipPolygon/TooltipPolygon";
import { HomeSchemas } from "@/shared/api/schemas.api";

const SchemaPage = async ({ id }: { id: string }) => {
  const floorData = await HomeSchemas.homeSchemas(id);
  return (
    <div className={styles.schema}>
      {floorData.length && (
        <>
          <div className={styles.schemaContainer}>
            <p className={styles.title}>ԱՆՏԱՌԱՅԻՆ</p>
            <div className={styles.schemaBlock}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src={floorData[0].imageUrl}
                  alt={`Floor Plan`}
                  width={floorData[0].width}
                  height={floorData[0].height}
                  className={styles.floorImage}
                />
                <svg
                  viewBox={`0 0 ${floorData[0].width} ${floorData[0].height}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {floorData[0].Appartements.map(
                    ({
                      id,
                      coordinates,
                      in_stock,
                      room_count,
                      square_meter,
                    }) => (
                      <Link key={id} href={`/appartement/${id}`}>
                        <TooltipPolygon
                          id={id}
                          coordinates={coordinates}
                          in_stock={in_stock}
                          room_count={room_count}
                          square_meter={square_meter}
                        />
                      </Link>
                    )
                  )}
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.floorBlock}>
              <p className={styles.floorNumber}>{id}</p>
              <p className={styles.floorText}>Հարկ</p>
            </div>
            <div className={styles.gridContainer}>
              {foolNumbers.map((number) => (
                <CirculeButtonNumber
                  key={number}
                  numberData={number}
                  isChoiseNumber={id === number}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SchemaPage;
