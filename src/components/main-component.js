import data from "../data/data.json";

import 'animate.css';

export default function MainComponent() {
  return (
    <div className="grid-container animate__animated animate__pulse">
      {data.map((item) => (
        <div key={item.name} className={`${item.className} grid animate__animated animate__pulse`}>
          <div className="grid-row">
            <img src={item.avatar} alt="avatar" className="avatar" />
            <div>
              <p className="name">{item.name}</p>
              <p className="graduate">{item.sub_name}</p>
            </div>
            {item.bg_image ? (
              <div>
                <img src={item.bg_image} alt="quotes" className="quotes" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <p className="main-text">{item.main_text}</p>
            <p className="paragraph">"{item.paragraph}"</p>
          </div>
        </div>
      ))}
    </div>
  );
}
