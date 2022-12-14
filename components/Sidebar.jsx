import styles from '../styles/Sidebar.module.css'

const Sidebar = ({book}) => {
    const { id, Header,titleOne,titleTwo,titleThree,titleFour} = book;

    return(
        <div style={{color:"#01b46c"}}>
      <h1 style={{paddingLeft:"20px"}} className={styles.heading}>{Header}</h1>
      <ul>
        <li><a>{titleOne}</a></li>
        <a><li>{titleTwo}</li></a>
        <a><li>{titleThree}</li></a>
        <a><li>{titleFour}</li></a>
        </ul>
    </div>
    )
}
export default Sidebar