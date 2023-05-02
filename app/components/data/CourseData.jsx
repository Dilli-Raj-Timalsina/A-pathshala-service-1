import dummyData from './DummyData';
const getData = () => {
  const data = dummyData.map((data) => data.courses).flat();
  console.log(data);
  return data;
};
const CourseData = getData();
export default CourseData;
