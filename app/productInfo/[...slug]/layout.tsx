export async function generateStaticParams() {
    // 定义所有可能的语言选项
    return [
      { lang: 'en' },
      { lang: 'zh' }
    ]
  }
export default function LayoutName({ children }) {
    return (
      <>
        {/* <div>顶部</div> */}
        <main>{children}</main>
        {/* <div>尾部</div> */}
      </>
    )
  }