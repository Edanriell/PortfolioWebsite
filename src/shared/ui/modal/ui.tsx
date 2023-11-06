export const Modal = () => (
  <>
    <input type="checkbox" id="my_modal_0" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg pb-4">Thanks for reaching me out !</h3>
        <p className="py-1">Email: my-portfolio.com</p>
        <p className="py-1">Telegram: @my-portfolio</p>
        <p className="py-1">Github: @my-portfolio</p>
        <div className="modal-action">
          <label htmlFor="my_modal_0" className="btn">
            Close!
          </label>
        </div>
      </div>
    </div>
  </>
);
