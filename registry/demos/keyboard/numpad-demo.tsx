import {
  KeyRow,
  Keycap,
  Keyboard,
} from "@/registry/components/animated-keyboard";

export default function NumpadDemo() {
  return (
    <div>
      <Keyboard>
        <KeyRow>
          <Keycap char="1" />
          <Keycap char="2" />
          <Keycap char="3" />
        </KeyRow>
        <KeyRow>
          <Keycap char="4" />
          <Keycap char="5" />
          <Keycap char="6" />
        </KeyRow>
        <KeyRow>
          <Keycap char="7" />
          <Keycap char="8" />
          <Keycap char="9" />
        </KeyRow>
      </Keyboard>
    </div>
  );
}
