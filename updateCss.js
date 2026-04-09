const fs = require('fs');

const cssPath = 'c:\\\\Users\\\\acer\\\\OneDrive\\\\Desktop\\\\jobzenterNextjs\\\\src\\\\components\\\\reach-us\\\\style.css';
let cssText = fs.readFileSync(cssPath, 'utf8');

cssText = cssText.replace(/\/\* TOAST ALERT OVERLAY STYLES \*\/[\s\S]*/, `/* TOAST FLOAT STYLES */
.form-toast-alert {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 18px 24px 18px 18px;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  z-index: 9999;
  width: max-content;
  max-width: 400px;
  text-align: left;
}

.animate-toast {
  animation: floatPopIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes floatPopIn {
  from { opacity: 0; transform: translate(-50%, -40%) scale(0.9); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

.toast-icon-wrap {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.toast-content {
  display: flex;
  flex-direction: column;
}

.toast-title {
  margin: 0 0 5px 0;
  font-size: 1.15rem;
  font-weight: 700;
}

.toast-desc {
  margin: 0 0 10px 0;
  font-size: 0.95rem;
  line-height: 1.4;
}

.toast-progress {
  height: 3px;
  width: 80%;
  border-radius: 2px;
}

.toast-close-btn {
  background: transparent;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  opacity: 0.5;
  transition: opacity 0.2s;
  margin-left: 10px;
}

.toast-close-btn:hover {
  opacity: 1;
}

/* SUCCESS TOAST */
.form-toast-success {
  background-color: #f1f9ec;
  border: 1px solid #d3ebd2;
}

.form-toast-success .toast-title,
.form-toast-success .toast-desc {
  color: #1e5620;
}

.form-toast-success .toast-icon-wrap {
  background-color: #d1ead1;
  color: #1e5620;
}

.form-toast-success .toast-progress {
  background-color: #4c8a32;
}

.form-toast-success .toast-close-btn {
  color: #1e5620;
}

/* ERROR TOAST */
.form-toast-error {
  background-color: #fce8e8;
  border: 1px solid #fad2d2;
}

.form-toast-error .toast-title,
.form-toast-error .toast-desc {
  color: #8c1e1e;
}

.form-toast-error .toast-icon-wrap {
  background-color: #fad2d2;
  color: #8c1e1e;
}

.form-toast-error .toast-progress {
  background-color: #c93434;
}

.form-toast-error .toast-close-btn {
  color: #8c1e1e;
}
`);

fs.writeFileSync(cssPath, cssText, 'utf8');
console.log('style.css Updated Successfully!');
