export default function Header(){
    return(
        <div>
        <img src='/logo.png' alt='logo' width={250} className='img-fluid d-block mx-auto mt-2'/>
      <h1 className='text-center'>Registration Form-SMIT</h1>
      <p className='text-center text-muted'>Services - Education - Registration</p>
      <div className='container'>
      <ul className="nav nav-tabs justify-content-center ">
  <li className="nav-item ">
    <a className="nav-link active text-success" aria-current="page" href="#">Registration</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Download ID card</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Results</a>
  </li>
</ul>
</div>
</div>
    );
}