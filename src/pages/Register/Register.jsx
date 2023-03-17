import { RegisterFormInput, RegisterForm, RegisterButton } from '@/pages/Register'

export function Register() {
  return(
    <main className="register">
      <h2>회원가입</h2>
      <div>필수입력사항</div>
      <RegisterForm legend="회원가입">
        <RegisterFormInput label="이메일" name="email" type="email" placeholder="예시) frontendo@saja.com">
          <RegisterButton>중복확인</RegisterButton>
        </RegisterFormInput>
        <RegisterFormInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요" />
        <RegisterFormInput label="비밀번호 확인" name="password" type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
        <RegisterFormInput label="이름" name="name" type="text" placeholder="이름을 입력해주세요" />
        <RegisterFormInput label="휴대폰" name="mobile" type="text" placeholder="숫자만 입력해주세요">
          <RegisterButton>인증번호</RegisterButton>
        </RegisterFormInput>
      </RegisterForm>
    </main>
  )
}