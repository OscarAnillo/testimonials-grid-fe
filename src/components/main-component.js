import data from "../data/data.json";

export default function MainComponent() {
  return (
    <div>
      {data.map((item) => (
        <div key={item.name} className={`${item.className} grid`}>
          <div className="grid-row">
            <div>
              <img src={item.avatar} alt="avatar" className="avatar" />
            </div>
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
