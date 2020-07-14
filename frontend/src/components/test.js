import React, { useEffect } from "react";
import { Button, Typography, Dialog } from "@material-ui/core";
import { render } from "@testing-library/react";
import FormDialog from "./dialog";
export default function Test() {
  const [count, setCount] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  {
    /*useEffect(() => {
    doom();
  }, [open]);

*/
  }
  const handle = () => {
    console.log("Open Dialog button clicked!");
    console.log("open value is " + open);
    setOpen(true);
    doom();
  };

  function doom() {
    console.log("doom is called");
    render(<FormDialog open={true} />);
  }
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}> Count {count}</Button>
      <Typography>{count}</Typography>
      <Button onClick={() => handle()}>Open Dialog</Button>
    </div>
  );
}
