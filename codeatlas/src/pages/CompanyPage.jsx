import React from "react";
import { useParams } from "react-router-dom";
import companies from "../data/companyQuestions.json";
import "../styles/CompanyPage.css";

const CompanyPage = () => {
  const { slug } = useParams();
  const company = companies.find((c) => c.slug === slug);

  if (!company) return <h2>Company Not Found</h2>;

  return (
    <div className="company-page">
      <div className="company-header">
        {/* <img src={company.logo} alt={company.company} /> */}
        <h2>{company.company} Interview Questions</h2>
      </div>
      <table className="question-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {company.questions.map((q, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{q.title}</td>
              <td className={`difficulty ${q.difficulty.toLowerCase()}`}>
                {q.difficulty}
              </td>
              <td>{q.acceptance}</td>
              <td>
                <a href={q.url} target="_blank" rel="noreferrer">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyPage;
