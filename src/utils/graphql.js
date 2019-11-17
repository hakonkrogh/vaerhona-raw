// Simple Graphql query function
export async function query(query, { variables } = {}) {
  const response = await fetch('https://xn--vrhna-sra2k.no/api/graphql', {
    method: 'post',
    headers: {
      ['content-type']: 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  return response.json();
}
