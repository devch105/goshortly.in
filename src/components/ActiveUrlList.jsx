import UrlCard from "./UrlCard";
const ActiveUrlList = ({ urls, loading,fetchUrls , onAnalyticsLoaded }) => {
  if (loading) {
    return <div className="card">Loading URLs...</div>;
  }

  if (!urls.length) {
    return <div className="card">No URLs Found</div>;
  }

  return (
    <div className="card">
      <h1 className="text-xl font-semibold">Active URL list</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        {urls.map((url) => (
          <UrlCard key={url.id} url={url} fetchUrls={fetchUrls}  onAnalyticsLoaded={onAnalyticsLoaded} />
        ))}
      </div>
    </div>
  );
};

export default ActiveUrlList;
