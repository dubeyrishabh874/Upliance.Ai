import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [["bold", "italic", "underline", "strike"]],
};

const RichTextEditor = ({ onChange, readOnly, value, height, width }) => {
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      onChange={onChange}
      readOnly={readOnly}
      value={value}
      style={{ height: height, width: width }}
    />
  );
};

export default RichTextEditor;
