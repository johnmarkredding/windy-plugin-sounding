// eslint-disable-next-line no-unused-vars
import { h } from "preact";
import { Cumulus } from "src/components/cumulus";

export function Parcel({ parcel, width, line, pToPx, formatAltitude }) {
  const { trajectory, isohume, elevThermalTop, pThermalTop, pCloudTop } = parcel;
  const parts = [];
  if (trajectory) {
    const thtY = pToPx(pThermalTop);
    if (pCloudTop) {
      const ctY = pToPx(pCloudTop);
      parts.push(
        <rect y={ctY} height={thtY - ctY} width={width} fill="url(#diag-hatch)" />,
        <Cumulus x={width} y={thtY} />,
        <line className="boundary" y1={ctY} y2={ctY} x2={width} />
      );
    }
    parts.push(
      <line className="boundary" y1={thtY} y2={thtY} x2={width} />,
      <text
        className="tick"
        style="fill: black"
        textAnchor="end"
        dominantBaseline="hanging"
        y={thtY + 4}
        x={width - 7}
        filter="url(#whiteOutlineEffect)"
      >
        {formatAltitude(elevThermalTop)}
      </text>,
      <path className="parcel trajectory" d={line(trajectory)} />
    );
    if (isohume) {
      parts.push(<path className="parcel isohume" d={line(isohume)} />);
    }
  }

  return parts.length ? <g>{parts}</g> : null;
}
