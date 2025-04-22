const withCentered = (WrappedComponent) => {
  return function CenteredComponent(props) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <WrappedComponent {...props} title={'HOC'} />
      </div>
    );
  };
}
export default withCentered;