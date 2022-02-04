import { Button } from "./libs/Button";
import { Text } from "./libs/Text";
import { Heading } from "./libs/Heading";

export const App = () => {
  return (
    <>
      <Text text="true" />;<Heading tag="h1">見出し</Heading>
      <Button
        onClick={() => console.log("clicked")}
        title="Button"
        type="primary"
        width={96}
      />
      <Button
        onClick={() => console.log("clicked")}
        title="Button"
        type="secondary"
      />
      <Button
        onClick={() => console.log("clicked")}
        title="Button"
        type="error"
      />
      <Heading tag="h1">
        <span> hello world!</span>
      </Heading>
    </>
  );
};
