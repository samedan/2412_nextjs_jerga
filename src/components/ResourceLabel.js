const ResourceLabel = ({ status }) => {
  return (
    // <span className={`tag is-large mr-4 resource-${status}`}>
    <span className={`tag  mr-4 resource-${status}`}>
      {status.toUpperCase()}
    </span>
  );
};

export default ResourceLabel;
