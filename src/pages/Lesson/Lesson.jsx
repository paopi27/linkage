
import './Lesson.css';
import Moon from '../../assets/pictures/MOON.png';
import Navigation from '../../components/Navigation/Navigation';

function Lesson() {
  // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
  const pdfFilePath = '../../src/assets/FileFolder/Real-Analysis-2017-Lecture-Notes-for-students.pdf';

  return (
    <>
      <Navigation />

      <br />

      <div className='head-lesson'>
        <h1>LESSONS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Nesciunt accusantium pariatur dolores reprehenderit ratione
            hic a soluta totam, vel iusto magni, repellendus non nemo 
            sequi alias voluptas? Maxime, soluta placeat.</p>
      </div>

      <br />

      <div className="lesson-card">
        <img src={Moon} alt="Card Image" className="lesson-card-image" />
        <div className="lesson-card-content">
          <h3 className="lesson-card-title">Real Analysis</h3>
          <p className="lesson-card-description">This is a brief description of the card.</p>
        </div>
        <a href={pdfFilePath} target="_blank" rel="noopener noreferrer" className="lesson-card-button">
          View PDF
        </a>
      </div>

      <div className="lesson-card">
        <img src={Moon} alt="Card Image" className="lesson-card-image" />
        <div className="lesson-card-content">
          <h3 className="lesson-card-title">Card Title</h3>
          <p className="lesson-card-description">This is a brief description of the card.</p>
        </div>
        <a href={pdfFilePath} target="_blank" rel="noopener noreferrer" className="lesson-card-button">
          View PDF
        </a>
      </div>

      <div className="lesson-card">
        <img src={Moon} alt="Card Image" className="lesson-card-image" />
        <div className="lesson-card-content">
          <h3 className="lesson-card-title">Card Title</h3>
          <p className="lesson-card-description">This is a brief description of the card.</p>
        </div>
        <a href={pdfFilePath} target="_blank" rel="noopener noreferrer" className="lesson-card-button">
          View PDF
        </a>
      </div>

      <div className="lesson-card">
        <img src={Moon} alt="Card Image" className="lesson-card-image" />
        <div className="lesson-card-content">
          <h3 className="lesson-card-title">Card Title</h3>
          <p className="lesson-card-description">This is a brief description of the card.</p>
        </div>
        <a href={pdfFilePath} target="_blank" rel="noopener noreferrer" className="lesson-card-button">
          View PDF
        </a>
      </div>

      <div className="lesson-card">
        <img src={Moon} alt="Card Image" className="lesson-card-image" />
        <div className="lesson-card-content">
          <h3 className="lesson-card-title">Card Title</h3>
          <p className="lesson-card-description">This is a brief description of the card.</p>
        </div>
        <a href={pdfFilePath} target="_blank" rel="noopener noreferrer" className="lesson-card-button">
          View PDF
        </a>
      </div>
    </>
  );
}

export default Lesson;
