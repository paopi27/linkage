import './Footer.css'



function Footer() {


  return (
    <>
      <main>

        <section className='footer'>
          <div className="footer-content">
            <h3>Linkag∃</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos est aliquid eaque beatae qui enim.
            Provident, unde earum odio libero eos dolores excepturi quasi illo vitae numquam error,
            tempore laudantium.
          </div>
        </section>
        <div className="copyright-text">
          &copy; {new Date().getFullYear()} Linkag∃
        </div>

      </main>
    </>
  )
}

export default Footer