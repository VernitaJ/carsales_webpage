import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const PopUp = () => {

    console.log("pipp");
    return (
        <PopUpContainer>
            <Link href="/contact">
                <Image
                    className="mx-auto m-5"
                    alt="chatbox"
                    src="/emailcircle.png"
                    width={50}
                    height={50}
                />
            </Link>
            <span>Contact us - we'll respond within 24hrs</span>

        </PopUpContainer >
    )
}
export default PopUp;

const PopUpContainer = styled.div`
position: fixed;
right: 20px;
`