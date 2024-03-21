import '../../styles/Home.css'
import Home1 from '../../assets/home1.mp4'

export default function HomePop2() {
    return (
        <div className="HomePop1">
            <div className="Pop1VideoSct">
                <video id='Pop1Video' src={Home1} loop play autoPlay></video>
            </div>
            <div className="Pop1Infos">
                <p className='Pop1Title'>Une toute nouvelle FORD</p>
                <button className='Pop1btn'>Commander</button>
            </div>
        </div>
    )
}

HomePop2();