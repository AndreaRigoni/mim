#ifndef HEADER_HPP
#define HEADER_HPP

class MyClass
{
public:
  int field;
  virtual void method() const = 0;

  static const int static_field;
  static int static_method();
};

#endif // HEADER_HPP
