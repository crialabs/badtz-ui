import {
  Keycap,
  KeyRow,
  Keyboard,
} from "@/registry/components/animated-keyboard";

export default function KeycapsDemo() {
  return (
    <div>
      <Keyboard>
        <KeyRow>
          <Keycap variant="tab" char="Tab" />
          <Keycap char="Q" />
          <Keycap variant="double" char="1" secondaryChar="!" />
        </KeyRow>
        <KeyRow>
          <Keycap char="A" />
          <Keycap variant="double" char="2" secondaryChar="@" />
          <Keycap variant="caps" char="Caps" />
        </KeyRow>
      </Keyboard>
    </div>
  );
}
