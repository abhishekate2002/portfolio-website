import "./DeskSubContent.css"

export default function DeskSubContent({children}){
    return(
        <div className="desk-submain-container">
<div style={styles.overlay}>ls
    <div style={styles.modal}>
      <h2>Modal Window</h2>
      <p>This is the modal content.</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
  {children}
</div>
    )
}