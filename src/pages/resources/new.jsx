import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceCreatePage = () => {
  const [form, setForm] = useState(DEFAULT_DATA);
  const router = useRouter();
  const person = undefined;

  const submitForm = () => {
    // alert(JSON.stringify(form));
    axios
      .post("/api/resources", form)
      .then((_) => router.push("/"))
      .catch((err) => {
        alert(err?.response?.data);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => setForm(DEFAULT_DATA);

  return (
    <Layout>
      {person?.name}
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
                      name="title"
                      onChange={handleChange}
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
                      name="description"
                      onChange={handleChange}
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
                      name="link"
                      onChange={handleChange}
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
                      <select
                        value={form.priority}
                        name="priority"
                        onChange={handleChange}
                      >
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
                      name="timeToFinish"
                      onChange={handleChange}
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
                    <button
                      className="button is-link"
                      onClick={submitForm}
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="button is-link is-light"
                    >
                      Reset form
                    </button>
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
