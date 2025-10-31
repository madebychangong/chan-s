// ============================================
// 상품 데이터 파일
// ============================================
// 새 상품을 추가하려면 아래 배열에 같은 형식으로 추가하세요!

const products = [
  // ========== 상품 1: 시즌 홍보 페이지 ==========
  {
    id: 'season',
    name: '시즌 홍보 페이지',
    shortDesc: '맞춤 홍보이미지로 시즌을 효과적으로 홍보하세요',
    icon: '🎨',
    tabs: [
      {
        name: '기능 소개',
        content: `
          <h2>제공 서비스</h2>
          <p class="lede">당신에게 맞는 단 한 장, 쉽고 빠른 적용</p>
          <div class="grid" style="gap:16px;margin-top:30px">
            <div class="g4 service-card">
              <strong>전용 홍보 이미지</strong>
              <p class="lede">톤·문구 요청대로 맞춤 제작<br>(PNG / GIF)</p>
            </div>
            <div class="g4 service-card">
              <strong>사용 가이드 안내</strong>
              <p class="lede">1:1 카톡으로 자세한 안내</p>
            </div>
            <div class="g4 service-card">
              <strong>무료 수정</strong>
              <p class="lede">시즌 내 무료 수정 가능</p>
            </div>
            <div class="g4 service-card">
              <strong>편한 게시물 작성</strong>
              <p class="lede">편한 게시물 작성을 위한<br>복붙용 코드 제공</p>
            </div>
            <div class="g4 service-card">
              <strong>운영 컨설팅</strong>
              <p class="lede">그외 각종 상담 및<br>다방면의 컨설팅 지원</p>
            </div>
            <div class="g4 service-card">
              <strong>빠른 제작</strong>
              <p class="lede">평균 1-3일 내 제작 완료</p>
            </div>
          </div>
        `
      },
      {
        name: '포트폴리오',
        content: `
          <h2>포트폴리오</h2>
          <p class="lede">썸네일을 클릭하면 <strong>원본 크기</strong>로 열립니다.</p>
          <div class="grid" style="margin-top:30px">
            <div class="g6">
              <article class="tile">
                <a href="#" class="lb-open" data-src="assets/sp1.gif" data-alt="샘플 1 확대">
                  <img loading="lazy" decoding="async" src="assets/sp1.gif" width="1200" height="675" alt="샘플 1">
                </a>
              </article>
            </div>
            <div class="g6">
              <article class="tile">
                <a href="#" class="lb-open" data-src="https://ssnmitgehgzzcpmqwhzt.supabase.co/storage/v1/object/public/changong-images/jerry13.webp" data-alt="샘플 2 확대">
                  <img loading="lazy" decoding="async" src="https://ssnmitgehgzzcpmqwhzt.supabase.co/storage/v1/object/public/changong-images/jerry13.webp" width="1200" height="675" alt="샘플 2">
                </a>
              </article>
            </div>
            <div class="g4">
              <article class="tile">
                <a href="#" class="lb-open" data-src="https://ssnmitgehgzzcpmqwhzt.supabase.co/storage/v1/object/public/changong-images/aron4.webp" data-alt="샘플 3 확대">
                  <img loading="lazy" decoding="async" src="https://ssnmitgehgzzcpmqwhzt.supabase.co/storage/v1/object/public/changong-images/aron4.webp" width="1000" height="562" alt="샘플 3">
                </a>
              </article>
            </div>
            <div class="g4">
              <article class="tile">
                <a href="#" class="lb-open" data-src="https://ssnmitgehgzzcpmqwhzt.supabase.co/storage/v1/object/public/changong-images/chaos100.png" data-alt="샘플 4 확대">
                  <img loading="lazy" decoding="async" src="https://ssnmitgehgzzcpmqwhzt.supabase.co/storage/v1/object/public/changong-images/chaos100.png" width="1000" height="562" alt="샘플 4">
                </a>
              </article>
            </div>
            <div class="g4">
              <article class="tile">
                <a href="#" class="lb-open" data-src="https://ssnmitgehgzzcpmqwhzt.supabase.co/storage/v1/object/public/changong-images/chaos-madebychangong.webp" data-alt="샘플 5 확대">
                  <img loading="lazy" decoding="async" src="https://ssnmitgehgzzcpmqwhzt.supabase.co/storage/v1/object/public/changong-images/chaos-madebychangong.webp" width="1000" height="562" alt="샘플 5">
                </a>
              </article>
            </div>
          </div>
        `
      },
      {
        name: '진행 프로세스',
        content: `
          <h2>진행 프로세스</h2>
          <p class="lede">체계적인 4단계 프로세스로 만족스러운 결과를 보장합니다</p>
          <div style="margin-top:40px">
            <div class="step"><div class="n">1</div><div><strong>미팅</strong><p class="lede">목표/톤/문구·레퍼런스 상담 (카톡/디스코드)</p></div></div>
            <div class="step"><div class="n">2</div><div><strong>시안</strong><p class="lede">맞춤 홍보물 제작·피드백 및 테스트지면 전달</p></div></div>
            <div class="step"><div class="n">3</div><div><strong>적용</strong><p class="lede">홍보물 납품 및 사용법 안내</p></div></div>
            <div class="step"><div class="n">4</div><div><strong>후관리</strong><p class="lede">시즌 종료까지 이슈 및 문의사항 대응</p></div></div>
          </div>
          
          <h2 style="margin-top:60px">시즌 목표</h2>
          <div class="grid" style="gap:20px;margin-top:30px">
            <div class="g6 metric-card"><span class="kpi">10팀</span><span class="lede">시즌 한정</span></div>
            <div class="g6 metric-card"><span class="kpi">1–3일</span><span class="lede">평균 제작</span></div>
            <div class="g6 metric-card"><span class="kpi">빠른 피드백</span><span class="lede">디자인 상담</span></div>
            <div class="g6 metric-card"><span class="kpi">카톡 1:1 A/S</span><span class="lede">철저한 후 관리</span></div>
          </div>
        `
      },
      {
        name: '패키지 · 가격',
        content: `
          <h2>패키지 · 가격</h2>
          <p class="lede">프로젝트 규모에 맞는 패키지를 선택하세요</p>
          <div class="pricing-grid" style="margin-top:30px">
            <div class="pricing-card">
              <strong>기본 패키지</strong>
              <p class="lede" style="margin-top:8px">시즌 맞춤 홍보물 · 게시글 복붙용 한줄 코드화 · <em>수정 1회</em></p>
              <div class="price">50,000원 ~</div>
            </div>
            <div class="pricing-card">
              <strong>몸편한 패키지</strong>
              <p class="lede" style="margin-top:8px">시즌 맞춤 홍보물 · <strong>게시글 매크로 포함</strong> · 게시글 복붙용 한줄 코드화 · <em>수정 3회</em></p>
              <div class="price">120,000원 ~</div>
            </div>
            <div class="pricing-card featured">
              <div class="badge-featured">추천</div>
              <strong>맘까지 편한 패키지</strong>
              <p class="lede" style="margin-top:8px">시즌 맞춤 홍보물 · 게시글 매크로 포함 · 게시글 복붙용 한줄 코드화 · <em>수정 5회 및 재제작 1회</em></p>
              <div class="price">150,000원 ~</div>
            </div>
          </div>
          <p class="pricing-note lede" style="margin-top:20px">
            ※ 맞춤 홍보물 크기에, 기능에 따라 가격이 상이합니다.<br>
            ※ 가격대별이 아닌 전체 패키지 총 10건만 제작합니다.<br>
            ※ 수정: 텍스트/색상/간단 문구만 포함 (이미지 교체는 재제작 필요)
          </p>
          <div style="margin-top:30px;display:flex;gap:12px;flex-wrap:wrap">
            <a class="btn pri" href="https://open.kakao.com/o/sCaiRmIh" target="_blank" rel="noopener noreferrer">카카오톡 상담하기</a>
          </div>
        `
      }
    ]
  },

  // ========== 상품 2: 게시글 매크로 ==========
  {
    id: 'macro',
    name: '인벤 게시글 매크로',
    shortDesc: '안전한 인벤용 게시글 매크로 ColdHawk',
    icon: 'assets/hawk_icon_256x256.png',  // 이미지 경로
    tabs: [
      {
        name: '주요 기능',
        content: `
          <h2>ColdHawk — 주요 기능</h2>
          <p class="lede">귀찮은 반복 업무를 자동화하는 스마트한 솔루션</p>
          <div class="grid" style="gap:16px;margin-top:30px">
            <div class="g6 feature-card">
              <strong>인벤 게시글 자동 등록</strong>
              <p class="lede" style="margin-top:8px">맞춤 설정한 내용으로 자동 게시</p>
            </div>
            <div class="g6 feature-card">
              <strong>재업로드 기능</strong>
              <p class="lede" style="margin-top:8px">원하는 시간(초)마다 자동으로 글 업로드</p>
            </div>
            <div class="g6 feature-card">
              <strong>게시글 3개 유지</strong>
              <p class="lede" style="margin-top:8px">1일 게시글 제한 방지 자동관리</p>
            </div>
            <div class="g6 feature-card">
              <strong>다중 계정 지원</strong>
              <p class="lede" style="margin-top:8px">최대 10개 계정을 동시에 관리</p>
            </div>
            <div class="g6 feature-card">
              <strong>개인화 사용</strong>
              <p class="lede" style="margin-top:8px">로그인 기반으로 어디서든 사용가능</p>
            </div>
            <div class="g6 feature-card">
              <strong>깔끔 · 가벼움</strong>
              <p class="lede" style="margin-top:8px">깔끔한 UI의 가벼운 프로그램</p>
            </div>
          </div>
        `
      },
      {
        name: '추천 대상',
        content: `
          <h2>이런 분들께 추천합니다</h2>
          <div style="margin-top:30px">
            <ul class="recommend-list">
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>정기 홍보를 하시는 분</strong>
                  <p class="lede">디아4, 피오이2 등 게임시즌마다 홍보하시는 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>인벤 유저</strong>
                  <p class="lede">인벤에 정기적으로 홍보글을 올리시는 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>시간 절약</strong>
                  <p class="lede">수동, 반복 작업 시간을 줄이고 싶으신 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>다중 커뮤니티 관리</strong>
                  <p class="lede">여러 커뮤니티를 동시에 관리하고 싶으신 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>게임과 동시 실행</strong>
                  <p class="lede">게임과 동시에 실행하고 싶으신 분</p>
                </div>
              </li>
            </ul>
          </div>
        `
      },
      {
        name: '사용 방법',
        content: `
          <h2>설치 · 이용 안내</h2>
          <p class="lede">3단계로 간편하게 시작하세요</p>
          <div style="margin-top:40px">
            <div class="step"><div class="n">1</div><div><strong>문의 & 결제</strong><p class="lede">상단 메뉴의 상담 버튼으로 문의 후 결제</p></div></div>
            <div class="step"><div class="n">2</div><div><strong>설치 & 가입</strong><p class="lede">프로그램 설치 → 회원가입 → 로그인</p></div></div>
            <div class="step"><div class="n">3</div><div><strong>설정 & 시작</strong><p class="lede">원하는대로 설정 후 자동 등록 시작</p></div></div>
          </div>
          
          <div style="margin-top:50px;padding:20px;background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:16px">
            <h3 style="margin:0 0 10px 0">💡 주의사항</h3>
            <ul class="lede" style="line-height:1.9;margin:10px 0 0 20px">
              <li>안전한 사용을 위해 과도한 재업로드는 자제해주세요</li>
              <li>커뮤니티 규칙을 준수하여 사용해주세요</li>
              <li>기술 지원은 카카오톡으로 문의 가능합니다</li>
            </ul>
          </div>
        `
      },
      {
        name: '이용 요금',
        content: `
          <h2>게시글 매크로 이용요금</h2>
          <p class="lede">사용 기간에 따라 선택하세요</p>
          <div class="pricing-grid" style="margin-top:30px">
            <div class="pricing-card">
              <strong>1개월</strong>
              <div class="price" style="margin-top:12px">30,000원</div>
              <p class="lede" style="margin-top:8px">단기 시즌용</p>
            </div>
            <div class="pricing-card">
              <strong>3개월</strong>
              <div class="price" style="margin-top:12px">80,000원</div>
              <p class="lede" style="margin-top:8px">월 26,666원 (11% 할인)</p>
            </div>
            <div class="pricing-card featured">
              <div class="badge-featured">인기</div>
              <strong>영구 이용권</strong>
              <div class="price" style="margin-top:12px">200,000원</div>
              <p class="lede" style="margin-top:8px">장기 사용시 가장 경제적</p>
            </div>
          </div>
          <div style="margin-top:30px;display:flex;gap:12px;flex-wrap:wrap">
            <a class="btn pri" href="https://open.kakao.com/o/sCaiRmIh" target="_blank" rel="noopener noreferrer">카카오톡 상담하기</a>
          </div>
        `
      }
    ]
  },

  // ========== 상품 3: ColdAPP (네이버 블로그 자동 포스팅) ==========
  {
    id: 'coldapp',
    name: 'AI 네이버 블로그 포스팅',
    shortDesc: '링크 하나로 시원하게 한번에! ColdAPP',
    icon: 'assets/coldapp_icon_256x256.png',  // 이미지 경로
    tabs: [
      {
        name: '주요 기능',
        content: `
          <h2>ColdAPP이 특별한 이유</h2>
          <p class="lede">AI가 대신 써주는 스마트한 블로그 관리 솔루션</p>
          <div class="grid" style="gap:16px;margin-top:30px">
            <div class="g6 feature-card">
              <strong>🧠 AI 자동 글쓰기</strong>
              <p class="lede" style="margin-top:8px">직접 쓰지 않아도 자연스러운 후기 완성</p>
            </div>
            <div class="g6 feature-card">
              <strong>🛍️ 상품 자동 인식</strong>
              <p class="lede" style="margin-top:8px">링크만 넣으면 제목·가격·이미지 모두 자동 추출</p>
            </div>
            <div class="g6 feature-card">
              <strong>📸 이미지 자동 첨부</strong>
              <p class="lede" style="margin-top:8px">최대 6장까지 다양한 형태로 예쁘게 배치</p>
            </div>
            <div class="g6 feature-card">
              <strong>🔠 강조 자동 적용</strong>
              <p class="lede" style="margin-top:8px">중요한 문장은 AI가 알아서 굵게 · 컬러 스타일강조</p>
            </div>
            <div class="g6 feature-card">
              <strong>🏷️ 해시태그 생성</strong>
              <p class="lede" style="margin-top:8px">유입에 도움되는 태그를 자동 추천</p>
            </div>
            <div class="g6 feature-card">
              <strong>🔐 로그인 & 관리</strong>
              <p class="lede" style="margin-top:8px">개별 닉네임 부여로 1PC가 아닌 여러곳에서 사용가능</p>
            </div>
          </div>

          <div style="margin-top:50px;padding:24px;background:linear-gradient(135deg, rgba(108,100,255,.15), rgba(168,85,247,.1));border:1px solid rgba(168,85,247,.3);border-radius:16px">
            <h3 style="margin:0 0 12px 0;color:var(--pri)">⏰ 평균 소요시간: 3~5분</h3>
            <p class="lede" style="margin:0;line-height:1.8">
              글 한 편에 30분 걸리던 시간이 <strong>몇분으로 단축</strong><br>
              하루 한 편씩, 매일 꾸준한 포스팅이 가능합니다.
            </p>
          </div>
        `
      },
      {
        name: '작동 방식',
        content: `
          <h2>어떻게 작동하나요?</h2>
          <p class="lede">4단계로 끝나는 초간단 포스팅</p>
          <div style="margin-top:40px">
            <div class="step">
              <div class="n">1</div>
              <div>
                <strong>URL을 붙여넣어요</strong>
                <p class="lede">네이버 브랜드커넥트 링크(naver.me/...) 하나면 충분합니다</p>
              </div>
            </div>
            <div class="step">
              <div class="n">2</div>
              <div>
                <strong>AI가 알아서 분석</strong>
                <p class="lede">상품명, 가격, 설명, 이미지까지 자동으로 수집합니다</p>
              </div>
            </div>
            <div class="step">
              <div class="n">3</div>
              <div>
                <strong>AI가 글을 써줘요</strong>
                <p class="lede">후기 형식으로 자연스럽고 사람 같은 글을 완성합니다</p>
              </div>
            </div>
            <div class="step">
              <div class="n">4</div>
              <div>
                <strong>자동 발행으로 마무리!</strong>
                <p class="lede">이미지, 해시태그도 자동작성되어 블로그에 바로 올라갑니다</p>
              </div>
            </div>
          </div>

          <h2 style="margin-top:60px">ColdAPP을 쓰면 생기는 변화</h2>
          <div class="grid" style="gap:20px;margin-top:30px">
            <div class="g6 metric-card">
              <span class="kpi">⏳ 30분 → 3분</span>
              <span class="lede">작업 시간 대폭 단축</span>
            </div>
            <div class="g6 metric-card">
              <span class="kpi">📈 노출률 상승</span>
              <span class="lede">양질의 꾸준한 포스팅으로</span>
            </div>
            <div class="g6 metric-card">
              <span class="kpi">💬 브랜드 신뢰도 향상</span>
              <span class="lede">일정한 품질의 글작성으로</span>
            </div>
            <div class="g6 metric-card">
              <span class="kpi">🎯 매일 업로드</span>
              <span class="lede">아이디어 고민 없이 클릭한번으로</span>
            </div>
          </div>
        `
      },
      {
        name: '추천 대상',
        content: `
          <h2>이런 분께 딱이에요!</h2>
          <div style="margin-top:30px">
            <ul class="recommend-list">
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>브랜드커넥트 자동운영</strong>
                  <p class="lede">자동화된 부업으로 판매 수익금을 원하시는분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>쇼핑몰 사장님</strong>
                  <p class="lede">상품 홍보 글이 부담스러운 쇼핑몰 사장님</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>마케터</strong>
                  <p class="lede">체험단 글, 후기 글을 꾸준히 올려야 하는 마케터</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>블로그 키우고 싶은 분</strong>
                  <p class="lede">"글은 쓰기 싫은데 블로그는 키우고 싶은" 모든 분들</p>
                </div>
              </li>
            </ul>
          </div>

          <div style="margin-top:40px;padding:24px;background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:16px">
            <h3 style="margin:0 0 16px 0">💬 실제 사용자 후기</h3>
            <div style="margin-bottom:20px;padding:16px;background:rgba(255,255,255,.02);border-radius:12px">
              <p class="lede" style="margin:0;line-height:1.8;font-style:italic">
                "이불 추천 글을 써야 했는데, 제품 설명보고 링크만 넣었어요.<br>
                AI가 소재 · 가격 · 후기 · 꿀팁까지 전부 정리해줬어요!"
              </p>
            </div>
            <div style="padding:16px;background:rgba(255,255,255,.02);border-radius:12px">
              <p class="lede" style="margin:0;line-height:1.8;font-style:italic">
                "리뷰 포스팅, 제품 사용해보고 글작성하고 너무 귀찮고 피곤했는데,<br>
                이제 커피 한 잔 마시면서 몇개나 포스팅을 할 수 있어요."
              </p>
            </div>
          </div>
        `
      },
      {
        name: '이용 요금',
        content: `
          <h2>AI 포스팅 프로그램 이용요금</h2>
          <p class="lede">사용 기간에 따라 선택하세요</p>
          <div class="pricing-grid" style="margin-top:30px">
            <div class="pricing-card">
              <strong>1주일</strong>
              <div class="price" style="margin-top:12px">29,000원</div>
              <p class="lede" style="margin-top:8px">단기 사용 및 체험용</p>
            </div>
            <div class="pricing-card">
              <strong>1개월</strong>
              <div class="price" style="margin-top:12px">79,000원</div>
              <p class="lede" style="margin-top:8px">한달간의 정기리뷰로 블로그 관리용</p>
            </div>
            <div class="pricing-card featured">
              <div class="badge-featured">인기</div>
              <strong>6개월</strong>
              <div class="price" style="margin-top:12px">400,000원</div>
              <p class="lede" style="margin-top:8px">완벽한 리뷰블로거로 거듭나기위한 최선의선택</p>
            </div>
          </div>
          <div style="margin-top:30px;display:flex;gap:12px;flex-wrap:wrap">
            <a class="btn pri" href="https://open.kakao.com/o/sCaiRmIh" target="_blank" rel="noopener noreferrer">카카오톡 상담하기</a>
          </div>
        `
      },
      {
        name: '제공 예시',
        content: `
          <h2>📌 제공 예시</h2>
          <p class="lede">ColdAPP으로 작성된 블로그 포스팅을 직접 확인해보세요</p>
          
          <div style="margin-top:30px;max-width:600px">
            <div class="feature-card" style="padding:24px">
              <strong style="font-size:18px;display:block;margin-bottom:12px">AI 자동 작성 블로그 예시</strong>
              <p class="lede" style="margin-bottom:20px">실제 ColdAPP이 자동으로 작성한 블로그 포스팅입니다</p>
              <a class="btn pri" href="https://blog.naver.com/shoping_72/224060436914" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px">
                블로그 보러가기 →
              </a>
            </div>
          </div>
        `
      },
      {
        name: '실구매자 사례',
        content: `
          <h2>👥 실구매자 사례</h2>
          <p class="lede">실제 구매자분들이 ColdAPP으로 작성한 블로그입니다</p>
          
          <div style="margin-top:30px;max-width:600px">
            <div class="feature-card" style="padding:24px">
              <strong style="font-size:18px;display:block;margin-bottom:12px">실구매자 작성 블로그</strong>
              <p class="lede" style="margin-bottom:20px">ColdAPP을 구매하신 고객님의 실제 사용 사례입니다</p>
              <a class="btn pri" href="https://blog.naver.com/coco_hodu_/224055705061" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px">
                블로그 보러가기 →
              </a>
            </div>
          </div>
        `
      }
    ]
  }

  // ========== 새 상품 추가 템플릿 (복사해서 사용하세요!) ==========
  /*
  ,{
   

  }
  */
];
