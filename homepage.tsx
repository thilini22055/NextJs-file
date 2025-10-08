import Image from "next/image";
import Link from "next/link";
import style from './Home.module.css'; 


export default function Home() {
  return (
    <div className={style.cover}>
      <nav className={style.navi}>   //navigation bar.it add all page
          <Link href="/">Home</Link> {" "}
          <Link href="/about">About Us</Link> {" "}
          <Link href="/contact">Contact</Link> {" "}
          <Link href="/module">Module</Link> {" "}
          <Link href="/result">Result</Link> {" "}
          <Link href="/paymentmethod">Payment Method</Link>
        </nav>
 
      <h1 className={style.title}>Sasiko Insitute Education Class</h1>
    <h1 className={style.h1}>Welcome to Our Sasiko Insitute</h1>
    
    <p className={style.p}>Welcome back! We're glad to see you again.Please log in to your account to access 
       personalized content, manage your preferences,and stay connected with all our latest updates. 
        Your account helps you keep track of your activity, access exclusive features, and enjoy a more secure,
         customized experience. If you’re having trouble logging in,feel free to use the “Forgot Password” link below. New here? You can easily 
      create an account in just a few steps.</p>   //this welcome phara
      
      <p className={style.p}>At Sasiko Insitute, we are dedicated to delivering 
        innovative digital solutions that empower individuals
        and businesses to thrive in a connected world. Whether
          you're looking for cutting-edge web development, 
          intuitive mobile applications, or expert tech 
          consulting, our team is here to bring your ideas to life.
          We combine technical excellence with creative thinking to
            ensure that every project exceeds expectations. Explore our
             services, learn about our mission, and discover how we can help you
         achieve your goals—faster, smarter, and better.</p>
  <br/><br/><br/>
    < Link href="/signin"><button className={style.but10}>register</button></Link> < Link href="/signin"> <button className={style.but20}>login in</button></Link>
    </div>
    
    
  );
}
