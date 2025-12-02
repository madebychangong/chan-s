// ============================================
// 상품 데이터 파일 (수정본: 마케팅 최적화 & 광고 정책 준수)
// ============================================

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
              <p class="lede" style="margin-top:8px">시즌 맞춤 홍보물 · <strong>자동 등록 툴 포함</strong> · 게시글 복붙용 한줄 코드화 · <em>수정 3회</em></p>
              <div class="price">120,000원 ~</div>
            </div>
            <div class="pricing-card featured">
              <div class="badge-featured">추천</div>
              <strong>맘까지 편한 패키지</strong>
              <p class="lede" style="margin-top:8px">시즌 맞춤 홍보물 · 자동 등록 툴 포함 · 게시글 복붙용 한줄 코드화 · <em>수정 5회 및 재제작 1회</em></p>
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

  // ========== 상품 2: 게시글 자동화 (구: 매크로) ==========
  {
    id: 'macro',
    name: '커뮤니티 자동 게시 툴',
    shortDesc: '안전하고 스마트한 인벤 게시글 관리 솔루션 ColdHawk',
    icon: 'assets/hawk_icon_256x256.png',
    tabs: [
      {
        name: '주요 기능',
        content: `
          <h2>ColdHawk — 주요 기능</h2>
          <p class="lede">귀찮은 반복 업무를 자동화하는 스마트한 솔루션</p>
          <div class="grid" style="gap:16px;margin-top:30px">
            <div class="g6 feature-card">
              <strong>게시글 자동 등록</strong>
              <p class="lede" style="margin-top:8px">맞춤 설정한 내용으로 정해진 시간에 자동 게시</p>
            </div>
            <div class="g6 feature-card">
              <strong>스마트 스케줄링</strong>
              <p class="lede" style="margin-top:8px">원하는 시간 간격으로 자연스럽게 업로드</p>
            </div>
            <div class="g6 feature-card">
              <strong>게시글 3개 유지</strong>
              <p class="lede" style="margin-top:8px">1일 게시글 제한 규정을 자동으로 준수</p>
            </div>
            <div class="g6 feature-card">
              <strong>다중 계정 지원</strong>
              <p class="lede" style="margin-top:8px">최대 10개 계정을 동시에 효율적으로 관리</p>
            </div>
            <div class="g6 feature-card">
              <strong>개인화 사용</strong>
              <p class="lede" style="margin-top:8px">로그인 기반으로 어디서든 편리하게 접속</p>
            </div>
            <div class="g6 feature-card">
              <strong>최적화 UI</strong>
              <p class="lede" style="margin-top:8px">리소스 점유율이 낮은 가벼운 프로그램</p>
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
                  <strong>정기 홍보가 필요한 분</strong>
                  <p class="lede">디아4, POE2 등 시즌마다 반복 홍보가 필수인 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>커뮤니티 셀러/길드장</strong>
                  <p class="lede">인벤 등 커뮤니티에서 꾸준한 노출이 필요한 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>시간이 부족한 분</strong>
                  <p class="lede">반복적인 수동 게시 작업에서 해방되고 싶은 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>효율적 관리</strong>
                  <p class="lede">여러 계정과 커뮤니티를 한 번에 관리하고 싶은 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>게이머</strong>
                  <p class="lede">게임을 플레이하면서 홍보는 자동으로 맡기고 싶은 분</p>
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
            <div class="step"><div class="n">2</div><div><strong>설치 & 가입</strong><p class="lede">전용 프로그램 설치 → 회원가입 → 로그인</p></div></div>
            <div class="step"><div class="n">3</div><div><strong>설정 & 시작</strong><p class="lede">게시글 내용 설정 후 '시작' 버튼만 누르면 끝</p></div></div>
          </div>
          
          <div style="margin-top:50px;padding:20px;background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:16px">
            <h3 style="margin:0 0 10px 0">💡 안전한 사용 가이드</h3>
            <ul class="lede" style="line-height:1.9;margin:10px 0 0 20px">
              <li>커뮤니티 이용 규칙을 준수하여 안전하게 사용하세요</li>
              <li>과도한 도배보다는 적절한 시간 간격을 권장합니다</li>
              <li>기술 지원은 카카오톡으로 언제든 문의 가능합니다</li>
            </ul>
          </div>
        `
      },
      {
        name: '이용 요금',
        content: `
          <h2>자동화 툴 이용요금</h2>
          <p class="lede">합리적인 가격으로 시간을 구매하세요</p>
          <div class="pricing-grid" style="margin-top:30px">
            <div class="pricing-card">
              <strong>1개월</strong>
              <div class="price" style="margin-top:12px">30,000원</div>
              <p class="lede" style="margin-top:8px">단기 시즌 집중 홍보용</p>
            </div>
            <div class="pricing-card">
              <strong>3개월</strong>
              <div class="price" style="margin-top:12px">80,000원</div>
              <p class="lede" style="margin-top:8px">월 26,000원대 (가성비 추천)</p>
            </div>
            <div class="pricing-card featured">
              <div class="badge-featured">인기</div>
              <strong>영구 이용권</strong>
              <div class="price" style="margin-top:12px">200,000원</div>
              <p class="lede" style="margin-top:8px">평생 소장 (장기적으로 가장 경제적)</p>
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
    name: 'AI 블로그 자동 포스팅',
    shortDesc: '링크만 넣으면 글/이미지/태그까지 한 번에! ColdAPP',
    icon: 'assets/coldapp_icon_256x256.png',
    tabs: [
      {
        name: '주요 기능',
        content: `
          <h2>ColdAPP이 특별한 이유</h2>
          <p class="lede">AI가 대신 써주는 스마트한 블로그 관리 솔루션</p>
          <div class="grid" style="gap:16px;margin-top:30px">
            <div class="g6 feature-card">
              <strong>🧠 AI 자동 글쓰기</strong>
              <p class="lede" style="margin-top:8px">직접 쓰지 않아도 전문가 수준의 리뷰 완성</p>
            </div>
            <div class="g6 feature-card">
              <strong>🛍️ 상품 자동 분석</strong>
              <p class="lede" style="margin-top:8px">링크만 넣으면 제목·가격·상세정보 자동 추출</p>
            </div>
            <div class="g6 feature-card">
              <strong>📸 스마트 이미지 배치</strong>
              <p class="lede" style="margin-top:8px">최대 6장까지 최적의 위치에 자동 첨부</p>
            </div>
            <div class="g6 feature-card">
              <strong>🔠 자동 강조 스타일링</strong>
              <p class="lede" style="margin-top:8px">핵심 키워드는 굵게/컬러로 자동 하이라이트</p>
            </div>
            <div class="g6 feature-card">
              <strong>🏷️ SEO 해시태그</strong>
              <p class="lede" style="margin-top:8px">검색 노출에 유리한 태그를 AI가 자동 추천</p>
            </div>
            <div class="g6 feature-card">
              <strong>🔐 멀티 디바이스</strong>
              <p class="lede" style="margin-top:8px">아이디/비번 방식이라 어디서든 접속 가능</p>
            </div>
          </div>

          <div style="margin-top:50px;padding:24px;background:linear-gradient(135deg, rgba(108,100,255,.15), rgba(168,85,247,.1));border:1px solid rgba(168,85,247,.3);border-radius:16px">
            <h3 style="margin:0 0 12px 0;color:var(--pri)">⏰ 포스팅 시간: 30분 → 3분</h3>
            <p class="lede" style="margin:0;line-height:1.8">
              글 쓰기 스트레스에서 해방되세요.<br>
              하루 한 편씩, 매일 꾸준한 '1일 1포'가 쉬워집니다.
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
                <strong>URL 붙여넣기</strong>
                <p class="lede">네이버 브랜드커넥트 등 상품 링크 하나면 준비 끝</p>
              </div>
            </div>
            <div class="step">
              <div class="n">2</div>
              <div>
                <strong>AI 심층 분석</strong>
                <p class="lede">상품명, 가격, 특징, 이미지를 AI가 순식간에 파악</p>
              </div>
            </div>
            <div class="step">
              <div class="n">3</div>
              <div>
                <strong>고퀄리티 글 작성</strong>
                <p class="lede">후기 스타일의 자연스러운 글을 AI가 작성</p>
              </div>
            </div>
            <div class="step">
              <div class="n">4</div>
              <div>
                <strong>자동 발행 완료</strong>
                <p class="lede">사진 배치, 태그 입력까지 완료된 글이 블로그에 등록</p>
              </div>
            </div>
          </div>

          <h2 style="margin-top:60px">ColdAPP 도입 효과</h2>
          <div class="grid" style="gap:20px;margin-top:30px">
            <div class="g6 metric-card">
              <span class="kpi">⏳ 시간 단축</span>
              <span class="lede">단 3분 만에 포스팅 완료</span>
            </div>
            <div class="g6 metric-card">
              <span class="kpi">📈 방문자 상승</span>
              <span class="lede">꾸준한 업로드로 지수 상승</span>
            </div>
            <div class="g6 metric-card">
              <span class="kpi">💰 수익 증대</span>
              <span class="lede">체험단/기자단 더 많이 수행</span>
            </div>
            <div class="g6 metric-card">
              <span class="kpi">🎯 스트레스 제로</span>
              <span class="lede">창작의 고통 없이 클릭만으로</span>
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
                  <strong>N잡러/부업러</strong>
                  <p class="lede">브랜드커넥트 등 수익형 포스팅을 자동으로 하고 싶은 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>쇼핑몰 사장님</strong>
                  <p class="lede">상품 홍보글 쓸 시간은 없고 광고비는 아끼고 싶은 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>마케터/대행사</strong>
                  <p class="lede">수십 개의 체험단/기자단 원고를 빠르게 처리해야 하는 분</p>
                </div>
              </li>
              <li>
                <span class="icon">✅</span>
                <div>
                  <strong>초보 블로거</strong>
                  <p class="lede">글재주가 없어 포스팅이 막막하신 분</p>
                </div>
              </li>
            </ul>
          </div>

          <div style="margin-top:40px;padding:24px;background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:16px">
            <h3 style="margin:0 0 16px 0">💬 실제 사용자 후기</h3>
            <div style="margin-bottom:20px;padding:16px;background:rgba(255,255,255,.02);border-radius:12px">
              <p class="lede" style="margin:0;line-height:1.8;font-style:italic">
                "이불 추천 글을 써야 했는데, 제품 링크만 넣으니까...<br>
                AI가 소재부터 세탁법, 꿀팁까지 완벽하게 정리해줬어요! 대박입니다."
              </p>
            </div>
            <div style="padding:16px;background:rgba(255,255,255,.02);border-radius:12px">
              <p class="lede" style="margin:0;line-height:1.8;font-style:italic">
                "퇴근하고 블로그 쓰기 너무 피곤했는데,<br>
                이제 씻고 나와서 버튼 하나 누르면 끝나요. 삶의 질이 달라졌습니다."
              </p>
            </div>
          </div>
        `
      },
      {
        name: '이용 요금',
        content: `
          <h2>AI 포스팅 솔루션 요금</h2>
          <p class="lede">합리적인 투자로 블로그를 키워보세요</p>
          <div class="pricing-grid" style="margin-top:30px">
            <div class="pricing-card">
              <strong>1주일 체험권</strong>
              <div class="price" style="margin-top:12px">59,000원</div>
              <p class="lede" style="margin-top:8px">기능 테스트 및 단기 사용</p>
            </div>
            <div class="pricing-card">
              <strong>1개월 이용권</strong>
              <div class="price" style="margin-top:12px">199,000원</div>
              <p class="lede" style="margin-top:8px">본격적인 블로그 성장 관리</p>
            </div>
            <div class="pricing-card featured">
              <div class="badge-featured">베스트</div>
              <strong>6개월 이용권</strong>
              <div class="price" style="margin-top:12px">799,000원</div>
              <p class="lede" style="margin-top:8px">최고 가성비로 누리는 자동화</p>
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
          <h2>📌 AI 작성 예시</h2>
          <p class="lede">ColdAPP이 작성한 실제 포스팅 퀄리티를 확인하세요</p>
          
          <div style="margin-top:30px;max-width:600px">
            <div class="feature-card" style="padding:24px">
              <strong style="font-size:18px;display:block;margin-bottom:12px">AI 자동 생성 포스팅</strong>
              <p class="lede" style="margin-bottom:20px">사람이 쓴 것처럼 자연스러운 문맥과 구성을 확인해보세요.</p>
              <a class="btn pri" href="https://blog.naver.com/shoping_72/224060436914" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px">
                예시 블로그 보러가기 →
              </a>
            </div>
          </div>
        `
      },
      {
        name: '성공 사례',
        content: `
          <h2>💰 실제 수익 증명</h2>
          <p class="lede">ColdAPP으로 블로그 자동 포스팅만으로 벌어들인 실제 수익입니다</p>

          <div style="margin-top:40px">
            <div class="grid" style="gap:24px">
              <div class="g6">
                <div class="feature-card" style="padding:20px">
                  <img src="스크린샷 2025-12-02 183006.png" alt="브랜드커넥트 수익 66만원" style="width:100%;height:auto;border-radius:12px;margin-bottom:16px">
                  <div style="display:flex;justify-content:space-around;gap:12px;margin-top:12px">
                    <div style="text-align:center">
                      <div style="font-size:13px;color:var(--mut);margin-bottom:4px">계좌 지급액</div>
                      <div style="font-size:20px;font-weight:700;color:#FFD34D">66만원</div>
                    </div>
                    <div style="text-align:center">
                      <div style="font-size:13px;color:var(--mut);margin-bottom:4px">정산 대상</div>
                      <div style="font-size:20px;font-weight:700;color:#FFD34D">1,241만원</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="g6">
                <div class="feature-card" style="padding:20px">
                  <img src="KakaoTalk_20251202_184139765.jpg" alt="브랜드커넥트 수익 35만원" style="width:100%;height:auto;border-radius:12px;margin-bottom:16px">
                  <div style="display:flex;justify-content:space-around;gap:12px;margin-top:12px">
                    <div style="text-align:center">
                      <div style="font-size:13px;color:var(--mut);margin-bottom:4px">계좌 지급액</div>
                      <div style="font-size:20px;font-weight:700;color:#FFD34D">35만원</div>
                    </div>
                    <div style="text-align:center">
                      <div style="font-size:13px;color:var(--mut);margin-bottom:4px">정산 대상</div>
                      <div style="font-size:20px;font-weight:700;color:#FFD34D">402만원</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="g12">
                <div class="feature-card" style="padding:20px">
                  <img src="KakaoTalk_20251125_005129063.png" alt="브랜드커넥트 판매 268개" style="width:100%;max-width:800px;height:auto;border-radius:12px;margin:0 auto 16px;display:block">
                  <div style="display:flex;justify-content:center;gap:32px;margin-top:12px;flex-wrap:wrap">
                    <div style="text-align:center">
                      <div style="font-size:13px;color:var(--mut);margin-bottom:4px">판매 개수</div>
                      <div style="font-size:20px;font-weight:700;color:#FFD34D">268개</div>
                    </div>
                    <div style="text-align:center">
                      <div style="font-size:13px;color:var(--mut);margin-bottom:4px">판매 금액</div>
                      <div style="font-size:20px;font-weight:700;color:#FFD34D">513만원</div>
                    </div>
                    <div style="text-align:center">
                      <div style="font-size:13px;color:var(--mut);margin-bottom:4px">예상 수익</div>
                      <div style="font-size:20px;font-weight:700;color:#FFD34D">46만원</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="g12">
                <div class="feature-card" style="padding:20px">
                  <img src="KakaoTalk_20251109_005056559.png" alt="브랜드커넥트 판매 43개" style="width:100%;max-width:800px;height:auto;border-radius:12px;margin:0 auto 16px;display:block">
                  <div style="display:flex;justify-content:center;gap:32px;margin-top:12px;flex-wrap:wrap">
                    <div style="text-align:center">
                      <div style="font-size:13px;color:var(--mut);margin-bottom:4px">판매 건수</div>
                      <div style="font-size:20px;font-weight:700;color:#FFD34D">43개</div>
                    </div>
                    <div style="text-align:center">
                      <div style="font-size:13px;color:var(--mut);margin-bottom:4px">판매 금액</div>
                      <div style="font-size:20px;font-weight:700;color:#FFD34D">60.6만원</div>
                    </div>
                    <div style="text-align:center">
                      <div style="font-size:13px;color:var(--mut);margin-bottom:4px">예상 수익</div>
                      <div style="font-size:20px;font-weight:700;color:#FFD34D">5.9만원</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 style="margin-top:60px">👥 고객 성공 사례</h2>
          <p class="lede">ColdAPP으로 블로그를 운영 중인 실제 고객님의 글입니다</p>

          <div style="margin-top:30px;max-width:600px">
            <div class="feature-card" style="padding:24px">
              <strong style="font-size:18px;display:block;margin-bottom:12px">실구매자 활용 사례</strong>
              <p class="lede" style="margin-bottom:20px">꾸준한 포스팅으로 방문자가 늘고 있는 실제 사례입니다.</p>
              <a class="btn pri" href="https://blog.naver.com/coco_hodu_/224055705061" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px">
                사례 보러가기 →
              </a>
            </div>
          </div>
        `
      }
    ]
  }
];
