
const date = new Date();
const curDate = date.getDate();

const Card=(props)=> {
  const {name,age}=props;
  return (
    <div className="card">
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{curDate}</h3>
    </div>
  );
}
export default Card;
