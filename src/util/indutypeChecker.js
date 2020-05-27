const indutypeData = {
  lodgment: ['숙박업-콘도', '숙박업-2급 호텔'],
  General_rest_food: [
    '일반휴게음식-일반한식',
    '일반휴게음식-주점',
    '일반휴게음식-서양음식',
    '일반휴게음식-스넥',
    '가구-일반가구',
    '일반휴게음식-칵테일바',
    '일반휴게음식-중국식',
    '일반휴게음식-갈비전문점',
    '일반휴게음식-일식·회집',
    '일반휴게음식-위탁급식업',
  ],
  leisure: [
    '회원제형태-레져업소',
    '레저업소-기타레져업소',
    '레져용품-스포츠·레져용품',
    '레저업소-골프경기장',
    '레저업소-당 구 장',
    '레저업소-헬스클럽',
    '레저업소-노 래 방',
    '레저업소-골프연습장',
    '레저업소-볼 링 장',
    '레저업소-스크린골프',
    '수리서비스-레져용품수리',
    '레져용품-골프용품 전문점',
    '레져용품-악기점',
    '레저업소-종합레져타운',
  ],
  Other: [
    '기타-비영리/대상',
    '기타-기계공구',
    '전기제품-가전제품',
    '주방용구-주방용구',
    '기타-기타 전문점',
    '회원제형태-기타4',
    '직물-카페트,커튼,천막,지물',
    '농업-비료,사료,종자',
    '전기제품-냉열기기',
    '광학제품-사진관',
    '기타-비영리/비대상',
    '농업-농기계',
    '기타의료기관-기타의료기관 및 기타의료',
    '회원제형태-기타1',
    '기타의료기관-산후조리원',
    '주방용구-주방용식기',
    '전기제품-기타전기제품',
    '직물-침구·수예점',
    '가구-기타가구',
    '회원제형태-기타3',
    '직물-옷감·직물',
    '농업-기타농업관련',
    '주방용구-정수기',
  ],
  Confectionery_beverage: [
    '음료식품-기타음료식품',
    '음료식품-정육점',
    '음료식품-농·축·수산품',
    '음료식품-미곡상',
    '음료식품-제과점',
    '음료식품-주류 판매점',
  ],
  hospital: [
    '병원-병원',
    '보건위생-의료용품',
    '보건위생-미용원',
    '보건위생-화장품',
    '의원-치과의원',
    '의원-의원',
    '의원-한의원',
    '기타의료기관-동물병원',
    '보건위생-피부미용실',
    '보건위생-이용원',
    '보건위생-사우나',
    '보건위생-미용재료',
    '보건위생-안경',
  ],
  Academy: [
    '학원-기타 교육기관',
    '학원-보습학원',
    '학원-유아원',
    '회원제형태-학원',
    '학원-예·체능계학원 ',
    '학원-초중고교육기관',
    '학원-외국어학원',
    '학원-유치원',
    '학원-독서실',
    '학원-기능학원',
    '학원-학습지 교육',
    '학원-컴퓨터학원',
  ],
  circulation: [
    '유통업 영리-슈퍼마켓',
    '건축자재-인테리어전문',
    '건축자재-목재·석재·철물',
    '유통업 영리-기타유통업',
    '유통업 영리-편 의 점',
    '건축자재-조명기구',
    '건축자재-기타건축자재',
    '유통업 비영리-농,축협 직영매장',
    '유통업 비영리-기타비영리유통',
    '건축자재-보일러·펌프·샷시',
    '건축자재-건축용 요업제품',
    '건축자재-부동산 분양',
    '건축자재-유리',
    '건축자재-페인트',
  ],
  service: [
    '용역 서비스-종합용역',
    '용역 서비스-법률회계서비스(개인)',
    '용역 서비스-기타용역서비스',
    '용역 서비스-부동산 중개·임대',
    '용역 서비스-사무서비스',
    '보건위생-기타대인서비스',
    '수리서비스-세탁소',
    '수리서비스-사무·통신기기수리',
    '용역 서비스-가례서비스업',
    '용역 서비스-조세서비스',
    '용역 서비스-화물운송',
    '수리서비스-기타수리서비스',
    '용역 서비스-법률회계서비스(법인)',
    '용역 서비스-소프트웨어',
    '수리서비스-가정용품수리',
    '용역 서비스-혼례서비스',
  ],
  Travel: [
    '여행-관광여행',
    '여행-렌터카',
    '여행-고속버스',
    '여행-택시',
    '여행-여객선',
  ],
  pharmacy: [
    '건강식품-기타건강식품',
    '약국-약국',
    '건강식품-홍삼제품',
    '건강식품-인삼제품',
    '약국-한약방',
    '회원제형태-건강식품',
  ],
  Clothing_goods_household_appliances: [
    '신변잡화-기타잡화',
    '의류-정장',
    '신변잡화-액세서리',
    '의류-내의판매',
    '의류-기타의류',
    '신변잡화-귀금속',
    '신변잡화-가방',
    '수리서비스-신변잡화수리',
    '신변잡화-기념품점',
    '의류-맞춤복점',
    '의류-캐주얼의류',
    '신변잡화-신발',
    '의류-단체복',
    '의류-아동의류',
    '신변잡화-시계',
    '의류-스포츠의류',
  ],
  Carsales: [
    '자동차정비 유지-주차장',
    '자동차판매-중고자동차판매',
    '자동차판매-이륜차판매',
    '자동차정비 유지-카인테리어',
    '자동차정비 유지-자동차부품',
    '자동차정비 유지-자동차정비',
    '자동차정비 유지-자동차시트·타이어',
    '자동차정비 유지-세차장',
    '자동차판매-국산신차판매',
    '자동차판매-기타운송',
    '자동차정비 유지-가타자동차서비스',
    '자동차정비 유지-윤활유 전문 판매',
    '자동차정비 유지-견인서비스',
  ],
  gasstation: [
    '연료판매점-E1가스충전소',
    '연료판매점-SK주유소',
    '연료판매점-현대정유(오일뱅크)',
    '연료판매점-GS주유소',
    '연료판매점-GS 가스충전소',
    '연료판매점-LPG 취급점',
    '연료판매점-주유소',
    '연료판매점-SK가스충전소',
    '연료판매점-기타연료',
    '연료판매점-쌍용S-OIL',
    '연료판매점-유류판매',
    '연료판매점-쌍용S-OIL 가스충전소',
  ],
  Books_stationery: [
    '회원제형태-서적',
    '서적문구-일반서적',
    '서적문구-완구점',
    '서적문구-출판 및 인쇄물',
    '서적문구-문구용품',
    '서적문구-기타서적문구',
    '서적문구-과학기자재',
  ],
  Office_communications: [
    '사무통신-컴퓨터',
    '사무통신-통신기기',
    '사무통신-사무용 OA기기',
    '사무통신-기타 사무용품',
  ],
  Culture_hobby: [
    '문화.취미-민예·공예품',
    '문화.취미-애완동물',
    '문화.취미-화랑',
    '문화.취미-티켓',
    '문화.취미-문화취미기타',
    '문화.취미-화원',
    '문화.취미-골동품점',
    '문화.취미-화방·표구점',
    '문화.취미-수족관',
    '문화.취미-영화관',
  ],
};

module.exports = {
  get: (marketList, indutype) => {
    if (marketList[0] !== null) {
      let resultMarket = marketList.map((market) => {
        if (indutypeData[indutype].includes(market.INDUTYPE_NM)) {
          return market;
        }
      });
      indutypeData[indutype];
      return resultMarket;
    } else {
      return [];
    }
  },
};
