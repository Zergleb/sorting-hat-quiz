import './Intro.scss'
import sortingHatImg from './sortingHat.png'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <section className="intro-section">
            <section className="intro-content">
                <div className="sorting-song">
                    <h1>The Hogwarts Sorting Hat's Song</h1>
                    <p>
                        Oh, you may not think I'm pretty,
                        But don't judge on what you see,
                        I'll eat myself if you can find
                        A smarter hat than me.
                        You can keep your bowlers black,
                        Your top hats sleek and tall,
                        For I'm the Hogwarts Sorting Hat
                        And I can cap them all.
                        There's nothing hidden in your head
                        The Sorting Hat can't see,
                        So try me on and I will tell you
                        Where you ought to be.
                        You might belong in Gryffindor,
                        Where dwell the brave at heart,
                        Their daring, nerve and chivalry
                        Set Gryffindors apart;
                        You might belong in Hufflepuff,
                        Where they are just and loyal,
                        Those patient Hufflepuffs are true
                        And unafraid of toil;
                        Or yet in wise old Ravenclaw,
                        If you've a ready mind,
                        Where those of wit and learning,
                        Will always find their kind;
                        Or perhaps in Slytherin
                        You'll make your real friends,
                        Those cunning folk use any means
                        To achieve their ends.
                        So put me on! Don't be afraid!
                        And don't get in a flap!
                        You're in safe hands (though I have none)
                        For I'm a Thinking Cap!
                    </p>  
                </div>
                <img 
                    src={sortingHatImg}
                    alt="Hogwarts Sorting Hat"
                    className="sorting-hat-img"
                />
            </section>
            <Link to="/your-name">
                <button className="get-sorted-btn">Get Sorted</button>
            </Link>
        </section>
    )
}

export default Intro