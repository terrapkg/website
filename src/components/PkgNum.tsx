import { AuroraText } from "./ui/aurora-text";
import { NumberTicker } from "./ui/number-ticker";

export const PkgNum = () => {
    return (
        <AuroraText className="-z-10">
            <NumberTicker value={2000} startValue={1000} />+
        </AuroraText>
    );
}
