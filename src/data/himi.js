var himiJson = {
  name: 'ХИМИЙН ОСОЛ',
  image: require('../../images/himi.png'),
  bgImage: require('../../images/himi/image_himi.png'),
  id: '4',
  sound: 'himi_yu_we',
  body: [
    {
      title: 'Химийн осол гэж юу вэ?',
      text:
        'Химийн бодисыг тээвэрлэх, хадгалах, ашиглах, устгах үйл ажиллагааны горим зөрчигдөх, технологийн явцад эвдрэл гарах, санамсар болгоомжгүй байдлаар алдагдах, байгалийн аюулт үзэгдэл зэргээс шалтгаалан хүн, мал, амьтан, хүрээлэн буй орчинд аюул учруулах тохиолдлыг химийн осол гэнэ.\n\nХимийн бодисын ахуйн хордлого гэж химийн бодис болон химийн бодис агуулсан бүтээгдэхүүний зохисгүй хэрэглээ, санамсар болгоомжгүй байдал, аливаа ахуйн ослын үед авах арга хэмжээний талаарх мэдлэг дутмаг байдал, бэлтгэлгүй байдал зэргээс шалтгаалан эрүүл мэндэд сөрөг нөлөө учрахыг хэлнэ.\n\nАНХААРАЛ, БОЛГООМЖ, АНХНЫ ТУСЛАМЖ',
    },
  ],
  contents: [
    {
      name: 'АНХААРАХ ЗҮЙЛС',
      layout: 'items',
      body: [],
      sound: 'himi_anhaarah',
      contents: [
        {
          icon: require('../../images/himi/himi_items_1.png'),
          text: 'Химийн бодисын талаарх мэдлэг, мэдээллийг байнга авах',
        },
        {
          icon: require('../../images/himi/himi_items_2.png'),
          text:
            'Амьдарч байгаа газрынхаа ойролцоох химийн бодис ашигладаг аж ахуйн нэгж, байгууллагын талаар мэдээлэлтэй байх',
        },
        {
          icon: require('../../images/himi/himi_items_3.png'),
          text:
            'Ашиглаж буй аливаа бүтээгдэхүүнд агуулагддаг химийн бодисын хор аюулыг мэддэг, хамгаалах арга хэмжээг авч чаддаг байх',
        },
        {
          icon: require('../../images/himi/himi_items_4.png'),
          text: 'Аль болох химийн хорт болон аюултай бодистой харьцахгүй байх',
        },
        {
          icon: require('../../images/himi/himi_items_5.png'),
          text:
            'Химийн хорт болон аюултай бодистой харьцах тохиолдолд хувийн хамгаалалтын хэрэгслийг хэрэглэж, аюулгүй ажиллагааны зааврыг сахих',
        },
      ],
    },
    {
      name: 'ОСЛЫН ҮЕД АВАХ АРГА ХЭМЖЭЭ',
      layout: 'items',
      body: [],
      sound: 'himi_uyed',
      contents: [
        {
          icon: require('../../images/himi/himi_items_6.png'),
          text:
            'Химийн бодис асгарсан үед яаралтай мэргэжлийн байгууллагад хандах, дур мэдэн арга хэмжээ авахгүй байх',
        },
        {
          icon: require('../../images/himi/himi_items_7.png'),
          text: 'Айж сандран эмх замбараагүй байдал үүсгэхгүй байх',
        },
        {
          icon: require('../../images/himi/himi_items_8.png'),
          text:
            'Мэргэжлийн байгууллагын зааварчилгааг дагаж хамгаалах хэрэгслийг зааврын дагуу зөв хэрэглэх',
        },
        {
          icon: require('../../images/himi/himi_items_9.png'),
          text: 'Хоргодох байр, аюулгүй бүсэд шилжин байрлах',
        },
        {
          icon: require('../../images/himi/himi_items_10.png'),
          text:
            'Ослын голомтод ажиллаж байгаа мэргэжилтэн, албан хаагчдын ажилд саад учруулахгүй, өөрт байгаа мэдээллээр бүрэн хангах',
        },
        {
          icon: require('../../images/himi/himi_items_11.png'),
          text: 'Асгарсан бодис дундуур явахгүй, хүрэхгүй байх',
        },
      ],
    },
    {
      name: 'ОСОЛД ӨРТСӨН ТОХИОЛДОЛД АВАХ АРГА ХЭМЖЭЭ',
      layout: 'items',
      body: [],
      sound: 'himi_arga_hemjee',
      contents: [
        {
          icon: require('../../images/himi/himi_items_12.png'),
          text: 'Эмнэлгийн анхны тусламж үзүүлэх',
        },
        {
          icon: require('../../images/himi/himi_items_13.png'),
          text:
            'Осолд өртсөн үед 101, 102, 103, 105 дугаарын утсанд залгаж хаягаа зөв, ойлгомжтой, товч тодорхой өгөх',
        },
      ],
    },
  ],
};
module.exports = himiJson;
