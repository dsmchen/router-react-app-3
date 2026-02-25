import { useLoaderData } from 'react-router-dom';

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic
        nobis suscipit id consequuntur nesciunt eius nulla alias porro enim.
        Repellat voluptates sed facilis assumenda. Voluptas deserunt cupiditate
        harum commodi?
      </div>
    </div>
  );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch('http://localhost:4000/careers/' + id);

  if (!res.ok) {
    throw Error('Could not find that career');
  }

  return res.json();
};
