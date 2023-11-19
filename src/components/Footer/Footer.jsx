import './Footer.css'



function Footer() {


  return (
    <>
      <main>

        <section className='footer'>
          <div className="footer-content">
            <h1>Linkag∃</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos est aliquid eaque beatae qui enim.
            Provident, unde earum odio libero eos dolores excepturi quasi illo vitae numquam error,
            tempore laudantium.
          </div>
        </section>
        <div className="copyright-text">
          <p>&copy; {new Date().getFullYear()} Linkag∃</p>
        </div>

      </main>
    </>
  )
}

export default Footer