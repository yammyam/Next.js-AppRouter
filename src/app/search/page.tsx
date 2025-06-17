export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  //프롭스에 자동으로 쿼리스트링,url파라미터 들어가있음 쓸수있도록,
  const { q } = await searchParams;
  return <div>서치페이지 : {q}</div>;
}
