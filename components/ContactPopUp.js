import Link from 'next/link';
import Image from 'next/image';

const PopUp = () => {

    console.log("pipp");
    return (
        <div className="popup">
            <Link href="/contact">
                <Image
                    className="mx-auto m-5"
                    alt="chatbox"
                    src="/emailcircle.png"
                    width={50}
                    height={50}
                />
            </Link>
            <h2>
                Have a question?
            </h2>
            <p>Contact us</p>

        </div >
    )
}
export default PopUp;