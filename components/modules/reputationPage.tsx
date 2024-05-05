const ReputationPage = () => {
  <>
    {Array.from(new Array(8)).map((_, i) => (
      <tr key={i}>
        {Array.from(new Array(3)).map((_, i) => (
          <th key={i}>
            <div className=""></div>
          </th>
        ))}
      </tr>
    ))}
  </>;
};
