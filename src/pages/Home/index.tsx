import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const Home = () => {
  return (
    <div
      style={{
        width: "1000px",
        height: "500px",
        border: "1px solid rgb(34,47,62)",
        margin: "20px auto",
      }}
    >
      <Editor
        apiKey="t4kycfxgngufgebv3t8ritfj77h4r8c5yu4gcktmweqqgupb"
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          skin: "snow",
          height: 500,
          menubar: false,
          statusbar: false,
          block_formats:
            "Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3; Header 4=h4; Header 5=h5; Header 6=h6",
          color_cols: 5,
          plugins: [
            "advlist autolink lists link image charmap anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media paste advlink",
          ],
          toolbar: `fontselect fontsizeselect | bold italic underline strikethrough superscript subscript backcolor forecolor | 
             alignleft aligncenter alignright alignjustify lineheight | image media link`,
          content_style: "body { font-family: Arial; }",
        }}
        onEditorChange={(a) => {
          console.log(a);
        }}
      />
    </div>
  );
};

export default Home;
