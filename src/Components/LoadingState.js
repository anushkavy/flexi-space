import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingState() {
  return (
    <div className="loading-state">
      <CircularProgress sx={{ color: "#FF8C38" }} size={100} thickness={4} />
    </div>
  );
}
