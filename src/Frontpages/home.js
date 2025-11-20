import homestyle from '../css/carstyle.module.css'
export default function Home(){
    return(
        <>
         
        <div className={homestyle.imgheader}>
        <h1>Welcome to the Garage Store</h1>
            <img srcSet='../images/2021-Mercedes-Benz-S-Class.jpeg' width={500}/>
            <img srcSet='../images/s-class-exterior-right-front-three-quarter-8.jpeg'/>
            <img srcSet='../images/s-class-exterior-right-front-three-quarter-9.jpeg'width='100%'/>
        </div>
       

        </>
    )
}