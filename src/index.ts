import { QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QLineEdit } from '@nodegui/nodegui';

const win = new QMainWindow();
win.setWindowTitle("ToDo List");

const centralWidget = new QWidget();
centralWidget.setObjectName("myroot");
centralWidget.setMinimumSize(400, 600);
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

const label = new QLabel();
label.setObjectName("mylabel");
label.setText("ToDos");

const input = new QLineEdit()

const button = new QPushButton();
button.setText("Add")
button.setInlineStyle("color: black; margin-top: 10px;")
button.addEventListener('clicked',()=> {
  const newLabel = new QPushButton();
  newLabel.setText(input.text());
  newLabel.setObjectName("todo")
  newLabel.addEventListener('clicked', () => {
    rootLayout.removeWidget(newLabel);
  })
  rootLayout.addWidget(newLabel)
  input.clear();
});

rootLayout.addWidget(label);
rootLayout.addWidget(input);
rootLayout.addWidget(button);
win.setCentralWidget(centralWidget);
win.setStyleSheet(
  `
    #myroot {
      background-color: #fff;
      height: '100%';
      align-items: 'center';
      color: black;
    }
    #mylabel {
      font-size: 16px;
      font-weight: bold;
      padding: 1;
      color: black;
    }
    #todo {
      border: 1px solid gray;
      border-radius: 3px;
      background-color: transparent;
      width: 100%;
      color: black;
    }
  `
);
win.show();

(global as any).win = win;
