import Layout from "@/components/Layout";
import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceCreatePage = () => {
  const [form, setForm] = useState(DEFAULT_DATA);
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add new Resource : </h1>
              <form>
                {/* text */}
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      value={form.title}
                      className="input"
                      type="text"
                      placeholder="Learn NextJS and Sanity IO"
                    />
                  </div>
                </div>
                {/* text */}

                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      value={form.description}
                      className="textarea"
                      placeholder="Learn these technologies because they are popular and enable better SEO."
                    ></textarea>
                  </div>
                </div>
                {/* text */}
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      value={form.link}
                      className="input"
                      type="text"
                      placeholder="https://articole-smart.eu"
                    />
                  </div>
                </div>
                {/* text */}
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select value={form.priority}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* text */}
                <div className="field">
                  <label className="label">Time to Finish</label>
                  <div className="control">
                    <input
                      value={form.timeToFinish}
                      className="input"
                      type="number"
                      placeholder="60 (time is in minutes)"
                    />
                  </div>
                  <p className="help">Time is in minutes</p>
                </div>

                {/* Buttons */}
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
                {/* End Buttons */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreatePage;
