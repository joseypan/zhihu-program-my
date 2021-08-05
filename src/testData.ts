// 将接口在此处声明(接口跟随数据声明一起出现比较好)
export interface ColumnProps {
    id:number;
    title:string;
    avatar?:string;
    description:string;
}
const columnListData: ColumnProps[] = [
    {
      id: 1,
      title: "test1的专栏",
      description: "这是test1的专栏，有一段非常有意思的简介，可以更新一下欧",
      // avatar:
      //   "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150",
    },
    {
      id: 2,
      title: "test2的专栏",
      description: "这是test2的专栏，有一段非常有意思的简介，可以更新一下欧",
      avatar:
        "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150",
    },
    {
      id: 3,
      title: "test3的专栏",
      description: "这是test3的专栏，有一段非常有意思的简介，可以更新一下欧",
      avatar:
        "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150",
    },
    {
      id: 4,
      title: "test4的专栏",
      description: "这是test4的专栏，有一段非常有意思的简介，可以更新一下欧",
      avatar:
        "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150",
    },
    {
      id: 5,
      title: "test5的专栏",
      description: "这是test5的专栏，有一段非常有意思的简介，可以更新一下欧",
      avatar:
        "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150",
    },
    {
      id: 6,
      title: "test6的专栏",
      description: "这是test6的专栏，有一段非常有意思的简介，可以更新一下欧",
      avatar:
        "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150",
    },
  ];
export {columnListData};