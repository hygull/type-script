> 
> /^[0-9]+$/.test("123")
true
> /^[0-9]+$/.test("123x")
false
> /^[a-z]+$/.test("123x")
false
> /^[a-z]+$/.test("x")
true
> /^[a-z]+$/.test("xbdfdffdfd")
true
> /^[a-z]+$/.test("xbdfdffdfA")
false
> /^[a-z]+$/.test("xbdfdffdf12")
false
> /^[A-Z]+$/.test("ABZS")
true
> /^[A-Z]+$/.test("ABZSb")
false
> /^[A-Z]+$/.test("ABZs")
false
> /^[A-Z]+$/.test("Rishikesh")
false
> /^[A-Za-z0-9]+$/.test("Rishikesh")
true
> /^[A-Za-z0-9]+$/.test("Rishikesh123")
true
> /^[A-Za-z0-9]+$/.test("Rishikesh123A")
true
> /^[A-Za-z0-9]+$/.test("Rishikesh123A#")
false
> /^[A-Za-z0-9]+$/.test("Rishikesh123A@Qwerty")
false
> /^[A-Za-z0-9]+$/.test("UIOP123Qwerty")
true
> 
> /^[^0-9]+$/.test("")
false
> /^[^0-9]+$/.test("As")
true
> /^[^0-9]+$/.test("As@")
true
> /^[^0-9]+$/.test("As@12")
false