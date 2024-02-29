import { useState } from "react";
import RichTextEditor from "./Common/RichTextEditor";

function RichTextContent() {
  const [richTextContent, setRichTextContent] = useState("");

  return (
    <RichTextEditor
      onChange={setRichTextContent}
      readOnly={""}
      value={richTextContent || ""}
      height="30vh"
      width="40vw"
    />
  );
}

export default RichTextContent;
