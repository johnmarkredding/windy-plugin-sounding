import { h } from "preact";
import { PureComponent } from "src/components/pure";

// https://www.flaticon.com/authors/yannick
export class Cumulus extends PureComponent<{ x: number; y: number }, object> {
  render() {
    const { x, y } = this.props;
    return (
      <path
        className="cumulus"
        transform={`translate(${x - 36}, ${y - 28})`}
        d="M26.003 24H5.997C3.794 24 2 22.209 2 20c0-1.893 1.318-3.482 3.086-3.896A7.162 7.162 0 0 1 5 15c0-3.866 3.134-7 7-7 3.162 0 5.834 2.097 6.702 4.975A4.477 4.477 0 0 1 21.5 12c2.316 0 4.225 1.75 4.473 4h.03C28.206 16 30 17.791 30 20c0 2.205-1.789 4-3.997 4z"
      />
    );
  }
}
