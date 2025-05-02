import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/NoteViewer.css";

const NoteViewer = () => {
  const { gdriveId } = useParams();
  const embedUrl = `https://drive.google.com/file/d/${gdriveId}/preview`;
  const [loading, setLoading] = useState(true);

  return (
    <div className="viewer-background">
      <div className="viewer-glass-card">
        <h2 className="viewer-title">📄 Note Preview</h2>
        {loading && <div className="iframe-skeleton">Loading preview...</div>}
        <iframe
          src={embedUrl}
          title="Drive PDF"
          allow="autoplay"
          className={`viewer-iframe ${loading ? "hidden" : ""}`}
          onLoad={() => setLoading(false)}
        ></iframe>
      </div>
    </div>
  );
};

export default NoteViewer;
