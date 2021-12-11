import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [file, setFile] = useState<File | undefined>();
  const changeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event?.target?.files?.[0]);
  };

  useEffect(() => {
    console.info(file);
  }, [file]);

  return (
    <div className="App">
      <input type="file" name="file" onChange={changeHandler} />
    </div>
  );
};

export default App;
