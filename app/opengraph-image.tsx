import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Fade District Barber Shop — Vancouver, BC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const oswaldBold = await readFile(
    join(process.cwd(), "public/fonts/Oswald-Bold.woff"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "Oswald",
        }}
      >
        {/* Top barber-pole stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            display: "flex",
          }}
        >
          <div style={{ flex: 1, background: "#dc2626" }} />
          <div style={{ flex: 1, background: "#ffffff" }} />
          <div style={{ flex: 1, background: "#1d4ed8" }} />
        </div>

        {/* FD badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "4px solid #FBBF24",
            marginBottom: 30,
          }}
        >
          <span
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: "#FBBF24",
              letterSpacing: "0.05em",
            }}
          >
            FD
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 100,
            fontWeight: 700,
            color: "#FBBF24",
            letterSpacing: "0.14em",
            display: "flex",
          }}
        >
          FADE DISTRICT
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.38em",
            marginTop: 4,
            display: "flex",
          }}
        >
          BARBER SHOP
        </div>

        {/* Gold separator */}
        <div
          style={{
            width: 80,
            height: 2,
            background: "#FBBF24",
            margin: "28px 0",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            color: "#d97706",
            letterSpacing: "0.06em",
            display: "flex",
          }}
        >
          Fades · Shaves · Lineups
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 18,
            color: "#71717a",
            marginTop: 18,
            letterSpacing: "0.14em",
            display: "flex",
          }}
        >
          VANCOUVER, BC
        </div>

        {/* Bottom barber-pole stripe */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 10,
            display: "flex",
          }}
        >
          <div style={{ flex: 1, background: "#dc2626" }} />
          <div style={{ flex: 1, background: "#ffffff" }} />
          <div style={{ flex: 1, background: "#1d4ed8" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Oswald",
          data: oswaldBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
